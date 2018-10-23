<?php 

namespace Modules\System\Menu\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

use Modules\System\Menu\Models\MenuModel;
use Response;
use Uuid;


class MenuController extends Controller
{

	public function getAll(){
        // $data = DB::table("test")->get()->toArray();
        // dd($data);
        $datas = MenuModel::OrderBy('order')->get()->toArray();
        return Response::JSON($datas);
    }

    public function update(Request $request){
        $id = '';
        $name = $request->name;
        if(isset($request->id)){
            $id = $request->id;
        }
        if($id){
            $menuModel = MenuModel::find($id);
            $menuModel->name = $name;
            $menuModel->order = $request->order;
            $menuModel->save();
        }else{
            $menuModel = new MenuModel();
            $menuModel->id = Uuid::generate();
            $id_parent = $request->id_parent;
            $menuModel->id_parent = $id_parent;
            $menuModel->name = $name;
            $menuModel->order = $request->order;
            $menuModel->save();
        }
        $datas = MenuModel::get()->toArray();
        return Response::JSON(array('success' => true,'message' => 'Cập nhật thành công','data' => $datas));
    }

    public function delete(Request $request){
        $listid = trim($request->id,',');
        $arrId = explode(',',$listid);
        foreach($arrId as $id){
            $check = MenuModel::where('id_parent',$id)->count();
            if($check > 0){
                return Response::JSON(array('success' => false,'message' => 'Vui lòng xóa các menu con trước'));
            }
            $menuModel = MenuModel::find($id);
            $menuModel->delete();
        }
        return Response::JSON(array('success' => true,'message' => 'Xóa thành công'));
    }

    public function updateRoot(Request $request){
        $menuModel = new MenuModel();
        $nameMenu = $request->name;
        $menuModel->id = Uuid::generate();
        $menuModel->id_parent = 0;
        $menuModel->name = $nameMenu;
        $menuModel->order = $request->order;
        $menuModel->save();
        return Response::JSON(array('success' => true,'message' => 'Cập nhật thành công'));
    }

}
