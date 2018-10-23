<form action="sql" method="get" id="frmCreateDb">
<input type="hidden" name="_token" value="{{ csrf_token() }}">
<input type="hidden" id="namedb" value="{{$namedb}}">
<div class="modal-dialog modal-lg">
	<!-- Modal content-->
	<div class="modal-content">
		<div class="modal-header">
		  <button type="button" class="close" data-dismiss="modal">&times;</button>
		  <h4 class="modal-title">{{$label}}</h4>
		</div>
		<div class="modal-body">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="row form-group">
							<h5> Chọn File Bak cần khôi phục (đường dẫn: {{$path}} )</h5>
						</div>
						<div class="row form-group" style="overflow: scroll; height: 250px;">
							<div class="col-md-12">
								@foreach($alldbs as $alldb)
									<div class="radio">
									  <label><input type="radio" name="optradio" value="{{$alldb}}">{{$alldb}}</label>
									</div>
								@endforeach
							</div>
						</div>
						<div id="zendcode" class="col-md-12">
							
						</div>
					</div>
				</div>
		</div>
	<div class="modal-footer">
		<button id='btn_update' class="btn btn-primary btn-flat" type="button">Phục hồi</button>
		<button type="input" class="btn btn-default" data-dismiss="modal">{{Lang::get('System::Common.close')}}</button>
	 </div>	
</div>
</form>