<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mobilesson Statistics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- Bootstrap core CSS -->
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome -->
        <link href="css/font-awesome.min.css" rel="stylesheet">

        <!-- Pace -->
        <link href="css/pace.css" rel="stylesheet">

        <!-- Color box -->
        <link href="css/colorbox/colorbox.css" rel="stylesheet">

        <!-- Morris -->
        <link href="css/morris.css" rel="stylesheet" />

        <!-- Endless -->
        <link href="css/endless.min.css" rel="stylesheet">
        <link href="css/endless-skin.css" rel="stylesheet">

    </head>
    <body class="overflow-hidden">
        <!-- Overlay Div -->
        <div id="overlay" class="transparent"></div>

        <div id="wrapper" class="preload">
            <div id="top-nav" class="fixed skin-6">
                <a href="#" class="brand">
                    <span>Mobilesson</span>
                    <span class="text-toggle"> Admin</span>
                </a><!-- /brand -->
                <button type="button" class="navbar-toggle pull-left" id="sidebarToggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <button type="button" class="navbar-toggle pull-left hide-menu" id="menuToggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <ul class="nav-notification clearfix">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-bell fa-lg"></i>
                            <span class="notification-label bounceIn animation-delay6">5</span>
                        </a>
                        <ul class="dropdown-menu notification dropdown-3">
                            <li><a href="#">You have 5 new notifications</a></li>
                            <li>
                                <a href="#">
                                    <span class="notification-icon bg-warning">
                                        <i class="fa fa-warning"></i>
                                    </span>
                                    <span class="m-left-xs">Server #2 not responding.</span>
                                    <span class="time text-muted">Just now</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="notification-icon bg-success">
                                        <i class="fa fa-plus"></i>
                                    </span>
                                    <span class="m-left-xs">New user registration.</span>
                                    <span class="time text-muted">2m ago</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="notification-icon bg-danger">
                                        <i class="fa fa-bolt"></i>
                                    </span>
                                    <span class="m-left-xs">Application error.</span>
                                    <span class="time text-muted">5m ago</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="notification-icon bg-success">
                                        <i class="fa fa-usd"></i>
                                    </span>
                                    <span class="m-left-xs">2 items sold.</span>
                                    <span class="time text-muted">1hr ago</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="notification-icon bg-success">
                                        <i class="fa fa-plus"></i>
                                    </span>
                                    <span class="m-left-xs">New user registration.</span>
                                    <span class="time text-muted">1hr ago</span>
                                </a>
                            </li>
                            <li><a href="#">View all notifications</a></li>
                        </ul>
                    </li>
                    <li class="profile dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <strong>John Doe</strong>
                            <span><i class="fa fa-chevron-down"></i></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="clearfix" href="#">
                                    <img src="img/user.jpg" alt="User Avatar">
                                    <div class="detail">
                                        <strong>John Doe</strong>
                                        <p class="grey">John_Doe@email.com</p>
                                    </div>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li><a tabindex="-1" class="main-link logoutConfirm_open" href="#logoutConfirm"><i class="fa fa-lock fa-lg"></i> Log out</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /top-nav-->
            <aside class="fixed skin-6">
                <div class="sidebar-inner scrollable-sidebar">
                    <div class="size-toggle">
                        <a class="btn btn-sm" id="sizeToggle">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                        <a class="btn btn-sm pull-right logoutConfirm_open" href="#logoutConfirm">
                            <i class="fa fa-power-off"></i>
                        </a>
                    </div><!-- /size-toggle -->
                    <div class="user-block clearfix">
                        <img src="img/user.jpg" alt="User Avatar">
                        <div class="detail">
                            <strong>John Doe</strong><span class="badge badge-danger m-left-xs bounceIn animation-delay4">4</span>
                            <ul class="list-inline">
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="inbox.html" class="no-margin">Inbox</a></li>
                            </ul>
                        </div>
                    </div><!-- /user-block -->
                    <div class="search-block">
                        <div class="input-group">
                            <input type="text" class="form-control input-sm" placeholder="search here...">
                            <span class="input-group-btn">
                                <button class="btn btn-default btn-sm" type="button"><i class="fa fa-search"></i></button>
                            </span>
                        </div><!-- /input-group -->
                    </div><!-- /search-block -->
                    <div class="main-menu">
                        <ul>
                            <li class="active">
                                <a href="index.html">
                                    <span class="menu-icon">
                                        <i class="fa fa-desktop fa-lg"></i>
                                    </span>
                                    <span class="text">
								Dashboard
                                    </span>
                                    <span class="menu-hover"></span>
                                </a>
                            </li>
                            <li class="openable open">
                                <a href="#">
                                    <span class="menu-icon">
                                        <i class="fa fa-file-text fa-lg"></i>
                                    </span>
                                    <span class="text">
								Page
                                    </span>
                                    <span class="menu-hover"></span>
                                </a>
                                <ul class="submenu">
                                    <li><a href="login.html"><span class="submenu-label">Sign in</span></a></li>
                                    <li><a href="register.html"><span class="submenu-label">Sign up</span></a></li>
                                    <li><a href="lock_screen.html"><span class="submenu-label">Lock Screen</span></a></li>
                                    <li><a href="profile.html"><span class="submenu-label">Profile</span></a></li>
                                    <li><a href="blog.html"><span class="submenu-label">Blog</span></a></li>
                                    <li><a href="single_post.html"><span class="submenu-label">Single Post</span></a></li>
                                    <li><a href="landing.html"><span class="submenu-label">Landing</span></a></li>
                                    <li><a href="search_result.html"><span class="submenu-label">Search Result</span></a></li>
                                    <li><a href="chat.html"><span class="submenu-label">Chat Room</span></a></li>
                                    <li><a href="movie.html"><span class="submenu-label">Movie Gallery</span></a></li>
                                    <li><a href="pricing.html"><span class="submenu-label">Pricing</span></a></li>
                                    <li><a href="invoice.html"><span class="submenu-label">Invoice</span></a></li>
                                    <li><a href="faq.html"><span class="submenu-label">FAQ</span></a></li>
                                    <li><a href="contact.html"><span class="submenu-label">Contact</span></a></li>
                                    <li><a href="error404.html"><span class="submenu-label">Error404</span></a></li>
                                    <li><a href="error500.html"><span class="submenu-label">Error500</span></a></li>
                                    <li><a href="blank.html"><span class="submenu-label">Blank</span></a></li>
                                </ul>
                            </li>
                            <li class="openable">
                                <a href="#">
                                    <span class="menu-icon">
                                        <i class="fa fa-tag fa-lg"></i>
                                    </span>
                                    <span class="text">
								Component
                                    </span>
                                    <span class="badge badge-success bounceIn animation-delay5">9</span>
                                    <span class="menu-hover"></span>
                                </a>
                                <ul class="submenu">
                                    <li><a href="ui_element.html"><span class="submenu-label">UI Features</span></a></li>
                                    <li><a href="button.html"><span class="submenu-label">Button & Icons</span></a></li>
                                    <li><a href="tab.html"><span class="submenu-label">Tab</span></a></li>
                                    <li><a href="nestable_list.html"><span class="submenu-label">Nestable List</span></a></li>
                                    <li><a href="calendar.html"><span class="submenu-label">Calendar</span></a></li>
                                    <li><a href="table.html"><span class="submenu-label">Table</span></a></li>
                                    <li><a href="widget.html"><span class="submenu-label">Widget</span></a></li>
                                    <li><a href="form_element.html"><span class="submenu-label">Form Element</span></a></li>
                                    <li><a href="form_wizard.html"><span class="submenu-label">Form Wizard</span></a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="timeline.html">
                                    <span class="menu-icon">
                                        <i class="fa fa-clock-o fa-lg"></i>
                                    </span>
                                    <span class="text">
								Timeline
                                    </span>
                                    <span class="menu-hover"></span>
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html">
                                    <span class="menu-icon">
                                        <i class="fa fa-picture-o fa-lg"></i>
                                    </span>
                                    <span class="text">
								Gallery
                                    </span>
                                    <span class="menu-hover"></span>
                                </a>
                            </li>
                            <li>
                                <a href="inbox.html">
                                    <span class="menu-icon">
                                        <i class="fa fa-envelope fa-lg"></i>
                                    </span>
                                    <span class="text">
								Inbox
                                    </span>
                                    <span class="badge badge-danger bounceIn animation-delay6">4</span>
                                    <span class="menu-hover"></span>
                                </a>
                            </li>
                            <li>
                                <a href="email_selection.html">
                                    <span class="menu-icon">
                                        <i class="fa fa-tasks fa-lg"></i>
                                    </span>
                                    <span class="text">
								Email Template
                                    </span>
                                    <small class="badge badge-warning bounceIn animation-delay7">New</small>
                                    <span class="menu-hover"></span>
                                </a>
                            </li>
                            <li class="openable">
                                <a href="#">
                                    <span class="menu-icon">
                                        <i class="fa fa-magic fa-lg"></i>
                                    </span>
                                    <span class="text">
								Multi-Level menu
                                    </span>
                                    <span class="menu-hover"></span>
                                </a>
                                <ul class="submenu">
                                    <li class="openable">
                                        <a href="#">
                                            <span class="submenu-label">menu 2.1</span>
                                            <span class="badge badge-danger bounceIn animation-delay1 pull-right">3</span>
                                        </a>
                                        <ul class="submenu third-level">
                                            <li><a href="#"><span class="submenu-label">menu 3.1</span></a></li>
                                            <li><a href="#"><span class="submenu-label">menu 3.2</span></a></li>
                                            <li class="openable">
                                                <a href="#">
                                                    <span class="submenu-label">menu 3.3</span>
                                                    <span class="badge badge-danger bounceIn animation-delay1 pull-right">2</span>
                                                </a>
                                                <ul class="submenu fourth-level">
                                                    <li><a href="#"><span class="submenu-label">menu 4.1</span></a></li>
                                                    <li><a href="#"><span class="submenu-label">menu 4.2</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="openable">
                                        <a href="#">
                                            <span class="submenu-label">menu 2.2</span>
                                            <span class="badge badge-success bounceIn animation-delay2 pull-right">3</span>
                                        </a>
                                        <ul class="submenu third-level">
                                            <li class="openable">
                                                <a href="#">
                                                    <span class="submenu-label">menu 3.1</span>
                                                    <span class="badge badge-success bounceIn animation-delay1 pull-right">2</span>
                                                </a>
                                                <ul class="submenu fourth-level">
                                                    <li><a href="#"><span class="submenu-label">menu 4.1</span></a></li>
                                                    <li><a href="#"><span class="submenu-label">menu 4.2</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><span class="submenu-label">menu 3.2</span></a></li>
                                            <li><a href="#"><span class="submenu-label">menu 3.3</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div class="alert alert-info">
					Welcome to Mobilesson Admin. Do not forget to check all my pages.
                        </div>
                    </div><!-- /main-menu -->
                </div><!-- /sidebar-inner -->
            </aside>
            <div id="main-container">
                <?php
                    $page=isset($_GET["page"])?$_GET["page"]:"";
                    switch ($page) {
                        case "main":
                            require_once("components/main/main.php");
                            break;
                        case "inbox":
                            require_once("inbox.php");
                            break;
                        case "officials":
                            break;
                        default:
                            require_once("404.php");
                            break;
                    }
                ?>
               
            </div><!-- /main-container -->
                            <!-- Footer
                                                                                                                                                                                                        ================================================== -->
            <footer>
                <div class="row">
                    <div class="col-sm-6">
                        <span class="footer-brand">
                            <strong class="text-danger">Mobilesson</strong> Admin
                        </span>
                        <p class="no-margin">
					&copy; 2014 <strong>Mobilesson</strong>. ALL Rights Reserved.
                        </p>
                    </div><!-- /.col -->
                </div><!-- /.row-->
            </footer>


            <!--Modal-->
            <div class="modal fade" id="newFolder">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4>Create new folder</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="folderName">Folder Name</label>
                                    <input type="text" class="form-control input-sm" id="folderName" placeholder="Folder name here...">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-sm btn-success" data-dismiss="modal" aria-hidden="true">Close</button>
                            <a href="#" class="btn btn-danger btn-sm">Save changes</a>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </div><!-- /wrapper -->
        <a href="" id="scroll-to-top" class="hidden-print"><i class="fa fa-chevron-up"></i></a>

        <!-- Logout confirmation -->
        <div class="custom-popup width-100" id="logoutConfirm">
            <div class="padding-md">
                <h4 class="m-top-none"> Do you want to logout?</h4>
            </div>
            <div class="text-center">
                <a class="btn btn-success m-right-sm" href="login.html">Logout</a>
                <a class="btn btn-danger logoutConfirm_close">Cancel</a>
            </div>
        </div>

                    <!-- Le javascript
                                                                                                                                                    ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <!-- Jquery -->
        <script src="js/jquery-1.10.2.min.js"></script>
        <!-- Bootstrap -->
        <script src="bootstrap/js/bootstrap.js"></script>

        <!-- Flot -->
        <script src="js/jquery.flot.min.js"></script>

        <!-- Morris -->
        <script src="js/rapheal.min.js"></script>
        <script src="js/morris.min.js"></script>

        <!-- Colorbox -->
        <script src="js/jquery.colorbox.min.js"></script>
        <!-- Sparkline -->
        <script src="js/jquery.sparkline.min.js"></script>

        <!-- Pace -->
        <script src="js/uncompressed/pace.js"></script>

        <!-- Popup Overlay -->
        <script src="js/jquery.popupoverlay.min.js"></script>

        <!-- Slimscroll -->
        <script src="js/jquery.slimscroll.min.js"></script>

        <!-- Modernizr -->
        <script src="js/modernizr.min.js"></script>

        <!-- Cookie -->
        <script src="js/jquery.cookie.min.js"></script>

        <!-- Endless -->
        <script src="js/endless/endless_dashboard.js"></script>
        <script src="js/endless/endless.js"></script>

    </body>
</html>
