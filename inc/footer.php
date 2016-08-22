<div id="footer" class="background">
	<div class="footer flexbox main-container">
		<div class="footer-row-1">
			<?php 
			perch_blog_custom(array(
				'sort'=>'postDateTime',
				'sort-order'=>'RAND',
				'template'=>'blog/post_in_footer.html',
				'count'=>'3'
			)); ?>
		</div>
	</div>	
	<div class="footer-row-2">
		<div class="social">
			<a href="#">
				<img src="/img/social/twitter.svg" alt="Twitter" />
			</a>
			<a href="#">
				<img src="/img/social/facebook.svg" alt="Facebook" />
			</a>
			<a href="#">
				<img src="/img/social/you-tube.svg" alt="YouTube" />
			</a>
			<a href="#">
				<img src="/img/social/linkedin.svg" alt="LinkedIn" />
			</a>
			<a href="#">
				<img src="/img/social/pinterest.svg" alt="Pinterest" />
			</a>
		</div>	
	</div>
	<div class="footer main-container">
		<div class="footer-row-3 flexbox">
			<p class="contact-number"><span>Contact</span> <a href="tel:+441619268444">+44 (0)161 926 8444</a></p>
			<div class="enquiry-button">
				<a href="/work">
					<div class="hvr-bounce-to-right button-next flexbox">
						<p>View our work</p>
					</div>
				</a>
			</div>
		</div>
	</div>	
</div>