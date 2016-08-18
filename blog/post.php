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

<section class="content content-lead-primary">
    <section class="column primary">
        <?php perch_blog_post_categories(perch_get('s'), 'post_categories.html'); ?>
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
    <section class="column secondary noprint">
        <?php
			PerchBlog_Cache::disable();
		   perch_categories();
        ?>
		
		<!-- Go to www.addthis.com/dashboard to customize your tools -->
		<div class="addthis_sharing_toolbox"></div>
        
        <?php perch_content('form_subscribe'); ?>

    </section> <!-- secondary -->
</section> <!-- content -->

<?php perch_layout('global.footer'); ?>