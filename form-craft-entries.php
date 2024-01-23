<h1>Form Craft Entries</h1>

<form method="post" action="" class="fcp-admin-entries-form">
	<?php
	$args = array(
		'post_type' => 'form-craft',
	);

	$posts = new WP_Query( $args );

	echo '<select name="entries_of" id="entries_of">';
	while ( $posts->have_posts() ) :
		$posts->the_post();
		?>
		<option value="<?php the_ID(); ?>">
			<?php
			if ( get_the_title() !== '' ) {
				the_title();
			} else {
				echo 'No title';
			}
			?>
		</option>
		<?php
	endwhile;
	echo '</select>';

	wp_reset_postdata();
	?>

	<br>

	<input type="submit" name="get_entries" value="Get Entries">
</form>

<?php
if ( isset( $_POST['get_entries'] ) ) {
	global $wpdb;

	$table_name = $wpdb->prefix . 'form_craft_entries';


	if ( isset( $_POST['entries_of'] ) ) {
		$query   = "SELECT * FROM $table_name WHERE form_id = {$_POST['entries_of']}";
		$results = $wpdb->get_results( $query );

		$data       = get_post_meta( $_POST['entries_of'], 'form-json' );
		$all_fields = $data[0];
		?>
			<table class="fcp-entries-admin-table">
				<thead>
				<tr>
					<?php
					foreach ( $all_fields as $field ) {
						?>
								<th><?php echo $field->settings->label; ?></th>
							<?php
					}
					?>
				</tr>
				</thead>
				<tbody>
					<?php
					foreach ( $results as $result ) {
						?>
						<?php $row = json_decode( $result->entry ); ?>
						<tr>
							<?php
							foreach ( $row as $per_row_data ) {
								if ( $per_row_data->type === 'text' ) {
									?>
									<td><?php echo $per_row_data->value; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'number' ) {
									?>
									<td><?php echo $per_row_data->value; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'email' ) {
									?>
									<td><?php echo $per_row_data->value; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'name' ) {

									$val  = $per_row_data->value;
									$name = '';
									foreach ( $val as $string ) {

										$name .= $string . ' ';

									}

									?>
									<td><?php echo $name; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'address' ) {

									$val     = $per_row_data->value;
									$address = '';
									foreach ( $val as $string ) {

										$address .= $string . ' ';

									}

									?>
									<td><?php echo $address; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'checkbox' ) {

									$val    = $per_row_data->value;
									$values = '';
									foreach ( $val as $string ) {

										$values .= $string . '<br>';

									}

									?>
									<td><?php echo $values; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'password' ) {

									$val = $per_row_data->value;
									?>
									<td><?php echo $val; ?></td> 
									<?php

								} elseif ( $per_row_data->type === 'textarea' ) {

									$val = $per_row_data->value;
									?>
									<td><?php echo $val; ?></td> 
									<?php

								}

								?>
								<?php
							}
							?>
						
						</tr>
						<?php
					}
					?>

				</tbody>			
			</table>
		<?php
	}
}
?>
