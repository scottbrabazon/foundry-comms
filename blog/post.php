<?php
include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php');

// If no post content is present, redirect to the 404 page
$this_post = perch_blog_post(perch_get('s'), true);
if ($this_post == "") { header('Location: /404.php'); exit; }

$this_page_title = perch_blog_post_field(perch_get('s'), 'postTitle', TRUE);

$post_cats = perch_blog_post_field(perch_get('s'), 'cat_ids', TRUE);
$cats = '';
foreach ($post_cats as $post_cat) {
    $cats .= ' cat_'.$post_cat;
}

$metadescription = perch_blog_post_field(perch_get('s'), 'metadescription', TRUE);
$image = perch_blog_post_field(perch_get('s'), 'image', TRUE);
$author = perch_blog_author_for_post(perch_get('s'), array(
    'skip-template' => TRUE
), TRUE);

perch_layout('global.header', array(
	'title'=> $this_page_title,
	'description'=>$metadescription,
	'page_header'=>'Blog',
	'body_class'=>'blog '.$cats,
    'social_image' => $image
));
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
		<title>The Foundry | News and Views | <?php perch_blog_post_field(perch_get('s'), 'postTitle'); ?></title>
		<meta name="description" content="xxxxxxxxxxxx" />
		<link rel="canonical" href="http://dev.foundrydev.co.uk/blog/" />
		<meta name="keywords" content="Keywords" />


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
						<li><a href="/blog/" class="active">News</a></li>
				 	</ul>
				</div>
				<div class="flexbox navigation-menu">
				 	<ul class="menu-links flexbox">
						<li><a href="/about">About</a></li>
						<li><a href="/work">Work</a></li>
						<li><a href="/approach">Approach</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/blog/" class="active">News</a></li>
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

		<section id="posts" class="content content-lead-primary main-container">
		    <section class="column primary">
		       
				<?php perch_blog_post(perch_get('s')); ?>
				
				
				<div class="addthis">
					<!-- AddThis Button BEGIN -->
				        <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
				        <a class="addthis_button_preferred_3"></a>
				        <a class="addthis_button_preferred_4"></a>
				        <a class="addthis_button_preferred_1"></a>
				        <a class="addthis_button_preferred_2"></a>
				        <a class="addthis_button_compact"></a>
				        <a class="addthis_counter addthis_bubble_style"></a>
				        </div>
					<script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
					<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5379ef5d21908be3"></script>
					<!-- AddThis Button END -->
				</div> <!-- addthis -->
		        
		        <?php if (isset($author['author_image']['_default'])): ?>
		            <div class="blog-post-author">
		                <a href="/blog-author/<?php echo $author['authorSlug']; ?>/">
		                    <img alt="<?php echo $author['authorGivenName'].' '.$author['authorFamilyName']; ?>" class="author_image" src="<?php echo $author['author_image']['_default']; ?>" />
		                </a>
		                <?php echo $author['author_biog']['raw']; ?>
		            </div>
		        <?php endif; ?>
		    </section> <!-- primary -->

		    <!-- Go to www.addthis.com/dashboard to customize your tools -->
			<div class="addthis_sharing_toolbox"></div>
				
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

<?php perch_layout('global.footer'); ?>