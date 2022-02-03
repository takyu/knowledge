<?php 
session_start();
$self_url = $_SERVER['PHP_SELF']
?>

<form action="<?php echo $self_url; ?>" method="POST">
	<input type="text", name='title'>
	<input type="submit" value="create", name="type">
</form>

<?php
# Separate processing by button type
if (isset($_POST['type'])) {
	if ($_POST['type'] === 'create') {
		$_SESSION['todos'][] = $_POST['title'];
		echo "New task has been added. Taskname: {$_POST['title']}";
	} else if ($_POST['type'] === 'update') {
		$number = $_POST['id'] + 1;
		echo "<div>The number {$number} task has been changed.</div>";
		echo "<div>Taskname: Before [{$_SESSION['todos'][$_POST['id']]}] => After: [{$_POST['title']}]</div>";
		$_SESSION['todos'][$_POST['id']] = $_POST['title'];
	} else if ($_POST['type'] === 'delete') {
		$number = $_POST['id'] + 1;
		array_splice($_SESSION['todos'], $_POST['id'], 1);
		echo "The number {$number} task has been deleted. Taskname: {$_POST['title']}";
	}
}

# Initialize todo array
if (empty($_SESSION['todos'])) {
	$_SESSION['todos'] = [];
	echo '<div>Enter your task!!</div>';
	die();
}
?>

<ol>
	<?php 
		for ($i = 0; $i < count($_SESSION['todos']); $i++):
	?>
	<li>
		<form action="<?php echo $self_url; ?>" method="post">
			<input type="hidden" name="id" value="<?php echo $i; ?>">
			<input type="text" name="title" value="<?php echo $_SESSION['todos'][$i]; ?>">
			<input type="submit" name="type" value="delete">
			<input type="submit" name="type" value="update">
		</form>
	</li>
	<?php 
		endfor;
	?>
</ol>