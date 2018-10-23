<?php 

namespace Modules\Login\Models;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
	protected $table = 'system_user';
	protected $primaryKey = 'id';
    public $incrementing = false;
    public $timestamps = false;
	
	public function getall(){
		 //
	}
}
