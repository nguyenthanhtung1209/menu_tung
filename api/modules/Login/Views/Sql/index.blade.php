@extends('System.layouts.index')
@section('content')
<!-- /.content  --> 
<script type="text/javascript">
    var arrJsCss = $.parseJSON('<?php echo $strJsCss; ?>');
    EfyLib.loadFileJsCss(arrJsCss);
</script>
<form action="index" method="POST" id="frmCode_index">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
	<input type="hidden" id="id_tree" value="">
	<input type="hidden" id="message" ></input>
    <section class="content-wrapper">
        <div class="row breadcrumb" style="padding: 6px 45px;">
			<li style="margin-right: 5px;"><button id="hide-database" class="btn btn-default btn-sm ng-binding" type="button"><i class="fa fa-arrows-h" aria-hidden="true"></i></button></li>
			<button id="btn-new-query" class="btn btn-info btn-sm ng-binding" type="button">
				<i class="fa fa-code"></i> Câu lệnh mới
			</button>
			<div class="pmd-textfield pull-left" style="margin-right: 10px;">
				<input placeholder="Nhập từ khóa tìm kiếm..." class="search-input form-control"></input>
			</div>
			<div class="pull-right table-title-top-action">
				<div class="pull-left table-title-top-action">
					<select class="form-control" id="select_db" style="margin-right: 100px;">
						<option value="">-- Chọn database --</option>
						@foreach($alldbs as $alldb)
							<option value="{{$alldb->name}}">{{$alldb->name}}</option>
						@endforeach
					  </select>
				</div>
				<span style="margin-left: 20px;"></span>
				<button id="btn-excute" class="btn btn-warning btn-sm ng-binding" type="button">
						<i class="fa fa-tag"></i> Thực thi
				</button>
			</div>
		</div>
        <div class="col-md-4" style="width: 28%;" id="jstree-tree">
        </div>
        <!-- Màn hình danh sách -->
        <div  class="col-md-8" style="width: 72%;" id="wrap-user-top">
            <div class="col-md-6 col-sm-6">
            </div>
            <div class="row" id="pagination"></div>
        </div>
        <div id="zend_code" class="col-md-8" style="width: 72%; padding: 1px;overflow-y: auto;max-height: 100%;height: 560px;background-color: #FFFFFF;overflow-x: hidden;overflow-y: auto;">
			<div  class="code" id="code_1" data-ace-editor-id="1" data-ace-editor-allow-execution="true" {{$mode}}>
				<pre disabled class="editor" id="code_editor_1" ></pre>
			</div>
        </div>
		<div class="col-md-8" id="zend_result" style="width: 72%; padding: 1px; overflow: scroll; height: 300px; display:none">
		</div>
    </section>
</form>
<!-- Hien thi modal -->
<div class="modal fade" id="openDialog" role="dialog">
</div>
<div id="dialogconfirm">
</div>
<!-- contextMenu -->
<div id="contextMenu" class="dropdown clearfix">
</div>
<script type="text/javascript">
    var baseUrl = '{{ url("") }}';
    var Js_Sql = new Js_Sql(baseUrl, 'System/System', 'sql');
    jQuery(document).ready(function ($) {
        Js_Sql.loadIndex();
    })
</script>
@endsection