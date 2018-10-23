<?php 
namespace Modules\Login\Helpers;

use Modules\System\Listtype\Helpers\ListtypeHelper;

class Helpers
{
    public function genSidebar($events,$_code,$typeUnit){
        $ListtypeHelper = new ListtypeHelper();
        $options = $ListtypeHelper->_GetAllListObjectByListCode($_code);
        $sidebar = array();
        $i=0;
        foreach($options as $option){
            $checksidebar = false;
            $childs = array();
            $j=0;
            foreach($events as $event){
                $tempcate = $_code."_".$event->cate;
                if($tempcate == $option['code']
                    && ($event->type == 'All' || $event->type == $typeUnit)
                ){
                    $checksidebar = true;
                    $childs[$j]['name'] = $event->name;
                    $childs[$j]['code'] = $event->code;
                    $childs[$j]['icon'] = 'fa fa-angle-double-left fa-lg';
                    $j++;
                }
            }
            if($checksidebar){
                $sidebar[$i]['name'] = $option['name'];
                $sidebar[$i]['icon'] = false;
                $sidebar[$i]['images'] = $option['images'];
                $sidebar[$i]['children'] = $childs;
                $i++;
            }
        }
        return $sidebar;
    }

    public function checkUnitByUser($type,$users){
        if($type == 'CAP_DON_VI_02'){
            $typeReturn = 'SO_NGHANH';
        }else{
            $typeReturn = 'QUAN_HUYEN';
        }
        if($users['owner_code'] !== '' && $users['owner_ward'] !== '' && !empty($users['owner_ward'])){
            $typeReturn = 'PHUONG_XA';
        }
        return $typeReturn;
    }
}