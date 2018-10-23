@extends('System.layouts.index')
@section('content')
<!-- /.content  --> 
<script type="text/javascript">
    var arrJsCss = $.parseJSON('<?php echo $strJsCss; ?>');
    EfyLib.loadFileJsCss(arrJsCss);
</script>
<form action="index" method="POST" id="frmHomePage_index">
<input type="hidden" name="_token" value="{{ csrf_token() }}">
<section class="content-wrapper">
	<ol class="breadcrumb">
		<li><a href="{{Request::fullUrl()}}"><i class="fa fa-tachometer"></i></a></li>
		<li class="active"><b>BẢNG THÔNG BÁO</b></li>
	</ol>
	<div class="panel panel-default">
        <div class="table-container">
            <div class="container">
            	<!--<div class="row first-line">
            		<div class="col-md-5">
            			<div class="panel panel-default child" style="height: 240px">
            				<div class="header-content left">
                                <div class="header">
                                    <div class="header-left">
                                        <i class="glyphicon glyphicon-cog"></i>
                                        <img src="../public/images/cpu.png" alt="CPU">
                                        <label>CPU</label>
                                    </div>
                                </div>
            					<div class="content" style="background: #c9302c;border-radius: 3px;">
                                    <hr class="line-header">
                                    <div class="content-1">
                                        <h2>Đã sử dụng</h2>
                                    </div>
                                    <div class="content-2">
                                        <h2></h2>
                                    </div>
                                </div>
            				</div>
            			</div>
            		</div>
            		<div class="col-md-5">
            			<div class="panel panel-default child" style="height: 240px;">
            				<div class="header-content right">
            					<div class="header">
                                    <div class="header-left">
                                        <img src="../public/images/ram.png" alt="CPU">
                                        <label>RAM</label>
                                    </div>
                                </div>
                                <div class="content" style="background: #f0ad4e;border-radius: 3px;">
                                    <hr class="line-header">
                                    <div class="content-1">
                                        <h2>Đã sử dụng</h2>
                                    </div>
                                    <div class="content-2">
                                        <h2></h2>
                                    </div>
                                </div>
            				</div>
            			</div>
            		</div>
            	</div>-->
                <div class="row first-line">
                    <div class="col-md-5">
                        <div class="panel panel-default child">
                            <div class="header-content left">
                                <div class="header">
                                    <div class="header-left">
                                        <i class="glyphicon glyphicon-cog"></i>
                                        <label>Dung lượng ổ cứng</label>
                                    </div>
                                </div>
                                <div class="content" style="background: #337ab7;border-radius: 3px;">
                                    <div class="content-1">
                                        <h2>Tổng :</h2>
                                        <h2>Đã sử dụng :</h2>
                                    </div>
                                    <div class="content-2">
                                        <h2>{{$disk_total}}</h2>
                                        <h2>{{$disk_used}}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="panel panel-default child">
                            <div class="header-content right">
                                <div class="header">
                                    <div class="header-left">
                                        <i class="glyphicon glyphicon-trash"></i>
                                        <label>Dung lượng rác</label>
                                    </div>
                                    <div class="header-right">
                                        
                                    </div>
                                </div>
                                <div class="content" style="background: #5bc0de;border-radius: 3px;">
                                    <div class="group-content-2">
                                        <div class="content-1">
                                            <h2>Dung lượng :</h2>
											
                                        </div>
                                        <div class="content-2">
                                            <h2>{{$disk_temp}}</h2>
											<h3><a id="delete-temp" href="#" class="btn btn-primary">Xóa file rác</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</form>
<!-- Hien thi modal -->
<div class="modal fade" id="addmodal" role="dialog">
</div>
<div id="dialogconfirm">
<script type="text/javascript">
    var baseUrl = '{{ url("") }}';
    var Js_HomePage = new Js_HomePage(baseUrl,'System/System','homepage');
	jQuery(document).ready(function($) {
        Js_HomePage.loadIndex();
	})
</script>
@endsection