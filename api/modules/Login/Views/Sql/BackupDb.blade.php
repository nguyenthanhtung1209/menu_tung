<form action="sql" method="get" id="frmCreateDb">
<input type="hidden" id="database" value="{{ $database }}">
<input type="hidden" name="_token" value="{{ csrf_token() }}">
<div class="modal-dialog modal-lg">
	<!-- Modal content-->
	<div class="modal-content">
		<div class="modal-header">
		  <button type="button" class="close" data-dismiss="modal">&times;</button>
		  <h4 class="modal-title">Backup Database [{{$database}}]</h4>
		</div>
		<div class="modal-body">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="row form-group">
						<table class="table table-bordered table-striped">
							<tbody>
							  <tr>
								<td>Tên</td>
								<td>Đường dẫn</td>
								<td>Dung lượng</td>
							  </tr>	
							  <tr>
								<td>{{$informations[0]->DatabaseName}}</td>
								<td>{{$informations[0]->Physical_Name}}</td>
								<td>{{$informations[0]->SizeMB}} Mb</td>
							  </tr>
							  <tr>
								<td>{{$informations[1]->DatabaseName}}</td>
								<td>{{$informations[1]->Physical_Name}}</td>
								<td>{{$informations[1]->SizeMB}} Mb</td>
							  </tr>
							</tbody>
						  </table>
						</div>
						<div id="result" class="row form-group">
							
						</div>
					</div>
				</div>
		</div>
	<div class="modal-footer">
		<button id='btn_update' class="btn btn-primary btn-flat" type="button">Sao lưu Database</button>
		<button type="input" class="btn btn-default" data-dismiss="modal">{{Lang::get('System::Common.close')}}</button>
	 </div>	
</div>
</form>