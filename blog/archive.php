<?php
include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php');

$this_page_header = "Blog Archive: ";

// defaults for all modes
$posts_per_page = 5;
$template 		= 'post_in_list.html';
$sort_order		= 'DESC';
$sort_by		= 'postDateTime';

// Have we displayed any posts yet?
$posts_displayed = false;

/* 
	perch_get() is used to get options from the URL.
	
	e.g. for the URL 
		/blog/archive.php?cat=news

	perch_get('cat') would return 'news' because cat=news.


	The code below looks for different options in the URL, and then displays different types of listings based on it.
*/

/* --------------------------- POSTS BY CATEGORY --------------------------- */
if (perch_get('cat')) {

	$this_page_header			= $this_page_header . perch_blog_category(perch_get('cat'), true);

	$options = array(
		'category'				=> perch_get('cat'),
		'template'				=> $template,
		'count'					=> $posts_per_page,
		'sort'					=> $sort_by,
		'sort-order'			=> $sort_order,
	);

	$posts_displayed			= true;

}

/* --------------------------- POSTS BY TAG (DISABLED FOR NOW) --------------------------- */

/*
if (perch_get('tag')) {
	
	$this_page_header			= $this_page_header . perch_blog_tag(perch_get('tag'), true);

	$options = array(
		'tag'   	 			=> perch_get('tag'),
		'template'				=> $template,
		'count'					=> $posts_per_page,
		'sort'					=> $sort_by,
		'sort-order'			=> $sort_order,
	);

    $posts_displayed			= true;
}
*/

/* --------------------------- POSTS BY DATE RANGE --------------------------- */

if (perch_get('year')) {

	$year						= intval(perch_get('year'));
	$date_from					= $year.'-01-01 00:00:00';
	$date_to					= $year.'-12-31 23:59:59';
	$title_date_format			= '%Y';

	// Month and Year?
	if (perch_get('month')) {
		$month					= intval(perch_get('month'));
		$date_from				= $year.'-'.str_pad($month, 2, '0', STR_PAD_LEFT).'-01 00:00:00';
		$date_to				= $year.'-'.str_pad($month, 2, '0', STR_PAD_LEFT).'-31 23:59:59';
		$title_date_format		= '%B, %Y';
	}

	$this_page_header			= $this_page_header . strftime($title_date_format, strtotime($date_from));

	$options = array(
		'filter'				=> 'postDateTime',
		'match'					=> 'eqbetween',
		'value'					=> $date_from.','.$date_to,
		'template'				=> $template,
		'count'					=> $posts_per_page,
		'sort'					=> $sort_by,
		'sort-order'			=> $sort_order,
	);

	$posts_displayed			= true;

}

/* --------------------------- POSTS BY AUTHOR --------------------------- */


if (perch_get('author')) {

	$this_page_header			= $this_page_header . "Posts by " . perch_blog_author(perch_get('author'), array('template' => 'author_name.html'), true);

	$options = array(
		'author'				=> perch_get('author'),
		'template'				=> $template,
		'count'					=> $posts_per_page,
		'sort'					=> $sort_by,
		'sort-order'			=> $sort_order,
	);

    $posts_displayed			= true;
}


/* --------------------------- DEFAULT: ALL POSTS --------------------------- */

if ($posts_displayed == false) {

	// No other options have been used; no posts have been displayed yet. So display all posts.

	$this_page_header			= "Blog Archive";
	
	$options = array(
		'template'				=> $template,
		'count'					=> $posts_per_page,
		'sort'					=> $sort_by,
		'sort-order'			=> $sort_order,
	);

}

/* ------------------------------------------------------ */

$this_page_title				= $this_page_header;

perch_layout('global.header', array(
	'title'=> $this_page_title,
	'description'=>'',
	'page_header'=>$this_page_header,
	'body_class'=>'blog'
));
?>

<section class="content content-lead-primary">
    <section class="column primary">
        
		<?php
		
		if (perch_get('author')) {

			$author = perch_blog_author(perch_get('author'), array(
				'skip-template' => true,
			));

	        if (isset($author['author_image']['_default'])): ?>
	            <div class="blog-post-author blog-post-author-archive">
	                <a href="/blog-author/<?php echo $author['authorSlug']; ?>/">
	                    <img alt="<?php echo $author['authorGivenName'].' '.$author['authorFamilyName']; ?>" class="author_image" src="<?php echo $author['author_image']['_default']; ?>" />
	                </a>
	                <?php echo $author['author_biog']['raw']; ?>
	            </div>
			 <?php endif;

		}
		
		perch_blog_custom($options);
		
		?>

    </section> <!-- primary -->
    <section class="column secondary noprints">
	
        <?php
			PerchSystem::set_var('current_cat', perch_get('cat'));
			PerchBlog_Cache::disable();
			perch_categories();
        ?>
		
		
        
		<?php perch_content('form_subscribe'); ?>

    </section> <!-- secondary -->
</section> <!-- content -->

<?php perch_layout('global.footer'); ?>