<?php
include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php');
perch_layout('global.header', array(
	'title'=>'Blog',
	'description'=>'',
	'page_header'=>'Blog'
));
?>

<?php
	// Defaults, which can be overridden
	$domain = 'http://'.$_SERVER["HTTP_HOST"];
	$url = $domain.$_SERVER["REQUEST_URI"];
	
	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('url',$url);
?>

<!DOCTYPE html>
<!--[if IE 6]>
<html class="ie ie6 nojs Corporate
">
<![endif]-->
<!--[if IE 7]>
<html class="ie ie7 nojs Corporate
">
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8 nojs Corporate
">
<![endif]-->
<!--[if !(IE)]><!-->
<html class="nojs" lang="en">
<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1.0,width=device-width">
		<meta name="msvalidate.01" content="12CA65DABA62FBA74F1C4C0248D90FC2">
		<title>The Foundry | News and Views</title>
		<link rel="canonical" href="<?php echo $url; ?>" />

		<link rel="stylesheet" media="all" href="../css/style.css">
		<link rel="stylesheet" media="all" href="../css/animate.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="/js/responsiveslides.min.js"></script>
		<script src="/js/flexibility.js"></script>
		<script src="/js/menu.js"></script>
		<script>flexibility(document.documentElement);</script>
	</head>

	<body>

		<nav id="navigation">
			<div class="navigation-panel flexbox main-container">
				<div class="logo">
					<a href="/"><img src="/img/foundry-logo.svg" alt="The Foundry Logo"></a>
				</div>
				<div class="flexbox navigation-menu-mobile">
					<div class="menu-toggle-button">
						<img src="/img/menu.svg" alt="Menu">
					</div>
				 	<ul class="menu-links-mobile">
						<li><a href="/about">About</a></li>
						<li><a href="/work">Work</a></li>
						<li><a href="/approach">Approach</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/news/" class="active">News</a></li>
						<li class="fhc-nav"><a href="http://www.foundryhealthcare.co.uk/">Foundry Healthcare</a></li>
						<li class="bia-nav"><a href="http://www.brandinaction.com/">Brand in Action</a></li>
				 	</ul>
				</div>
				<div class="flexbox navigation-menu">
				 	<ul class="menu-links flexbox">
						<li><a href="/about">About</a></li>
						<li><a href="/work">Work</a></li>
						<li><a href="/approach">Approach</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/news/" class="active">News</a></li>
						<li class="fhc-nav hvr-bounce-to-right flexbox"><a href="http://www.foundryhealthcare.co.uk/">FOUNDRY HEALTHCARE</a></li>
						<li class="bia-nav hvr-bounce-to-right flexbox"><a href="http://www.brandinaction.com/">BRAND IN ACTION</a></li>
				 	</ul>
				</div>
			</div>	
		</nav>


		<!-- Masthead -->

		<header id="blog-masthead" class="masthead flexbox">
			<div class="masthead-content main-container flexbox">
				<div class="headlines">
					<h1>News and Views</h1>
					<div class="rule">
						<img src="/img/rule.png" alt="Rule" />
					</div>
					<h3>Find out what makes us get out of bed in the morning, from industry insights to agency achievements.</h3>
				</div>
			</div>
		</header>	

		<!-- End Masthead -->


		<section id="recent-posts-index" class="main-container">

				<?php perch_blog_recent_posts(6); ?>

		</section>


		<!-- Footer -->

		<?php include_once($_SERVER['DOCUMENT_ROOT']."/inc/footer.php"); ?>

		<!-- End Footer -->

		<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>

		<script type="text/javascript" src="//dust.ipfingerprint.com/1631.js"></script>

		<div class="analytics">
	    <!-- Google Analytics -->
		    <script type="text/javascript">
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
				ga('create', 'UA-76745-2', 'foundrycomms.co.uk');
				ga('send', 'pageview');
			</script>
		</div>
	</body>
</html>