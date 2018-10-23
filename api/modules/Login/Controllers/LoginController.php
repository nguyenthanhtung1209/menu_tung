<?php 

namespace Modules\Login\Controllers;

use App\Http\Controllers\Controller;
use Modules\Core\Efy\Library;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use DB;
use URL;
use JWTAuth;
use JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
// use Modules\System\Users\Models\UserModel;
use Modules\System\Users\Models\UnitModel;
use Modules\Backend\Listtype\Helpers\DateHelper;
use Modules\Login\Helpers\Helpers;
use Modules\System\Listtype\Helpers\ListtypeHelper;
use Modules\Login\Models\UserModel;
use Uuid;
/**
 * Lớp xử lý quản trị, phân quyền người sử dụng
 *
 * @author Toanph <skype: toanph155>
 */
class LoginController extends Controller
{

    /**
     * Check users
     *
     * @return json
     */
    public function checklogin(Request $request) {
        $username = 'admin';
        $password = '1';

        $credentials = ['username' => $username, 'password' => $password];
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $users                              = $this->getUserInfor($username);
        $return['code']                     = 200;
        $return['message']                  = "Đăng nhập thành công!";
        $return['data']                     = compact('token');
        $return['data']['user_infor']       = $users;
        return response()->json($return);
    }

    public function getUserInfor($username) {
        $users = UserModel::where('username',$username)->get()->toArray();
        if($users && $users[0]){
            $usersinfor['id'] =  $users[0]['id'];
            $usersinfor['user_name'] =  $users[0]['username'];
        }
        return $usersinfor;
    }

    public function getDepartmentInfor($department_id){
        $department = UnitModel::where('id',$department_id)
        ->where('type','phongban')->get()->toArray();
        return $department[0];
    }

    public function getUnitInfor($unit_id){
        $unit = UnitModel::where('id',$unit_id)
        ->where('type','donvi')->get()->toArray();
        return $unit[0];
    }

    public function getSidebarInfor($type,$unit_id,$users){
        $code_default = '';
        $Helpers = new Helpers();
        $events = DB::table('event_type')
        ->select('*')
        ->join('event_unit', 'event_unit.event_type_id', '=', 'event_type.id')
        ->where('event_unit.unit_id', $unit_id)
        ->where('event_type.status', 1)
        ->orderBy('event_type.order','asc')
        ->get()->toArray();
        if(isset($events[0]->code)){
            $code_default = $events[0]->code;
        }
        // Kiem tra don vi la phuong xa hay so nghanh
        $typeUnit = $Helpers->checkUnitByUser($type,$users);
        $sidebar = $Helpers->genSidebar($events,'HO_TICH',$typeUnit);
        $return['sidebar'] = $sidebar;
        $return['code_default'] = $code_default;
        return $return;
    }

    public function refreshToken(){
        $token = JWTAuth::getToken();
        $new_token = JWTAuth::refresh($token);
        $return['token'] = $new_token;
        return response()->json($return);
    }

}
