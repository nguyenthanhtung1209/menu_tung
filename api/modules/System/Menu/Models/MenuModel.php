<?php 

namespace Modules\System\Menu\Models;

use Illuminate\Database\Eloquent\Model;

class MenuModel extends Model
{
	protected $table = 'system_menu';
	protected $primaryKey = 'id';
    public $incrementing = false;
    public $timestamps = false;
	
	public function getall(){
		 //
	}
}
