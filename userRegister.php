<html>
<body>
<?php 


require("Conn.php");
require("MySQLDao.php");
echo "start";
$email = htmlentities($_POST["email"]);
$password = htmlentities($_POST["password"]);
// $firstName = htmlentities($_POST["firstName"]);
// $lastName = htmlentities($_POST["lastName"]);
// || empty($firstName) || empty($lastName)

$returnValue = array();

 if(empty($email) || empty($password) )//|| empty($firstName) || empty($lastName))
{
$returnValue["status"] = "error";
$returnValue["message"] = "Missing required field";
echo json_encode($returnValue);
header("location:reg.html");
return;
}

$dao = new MySQLDao();
$dao->openConnection();
$userDetails = $dao->getUserDetails($email);

if(!empty($userDetails))
{
$returnValue["status"] = "error";
$returnValue["message"] = "User already exists";
echo json_encode($returnValue);
header("location:reg.html");
return;
}

$secure_password = md5($password); // I do this, so that user password cannot be read even by me

$result = $dao->registerUser($email,$secure_password);

if($result)
{
$returnValue["status"] = "Success";
$returnValue["message"] = "User is registered";
echo json_encode($returnValue);
echo "<script>parent.$.XYTipsWindow.removeBox();</script>";
echo "<script>window.location = 'http://haddyclipk1.comxa.com/login.html'</script>";
//header("location:login.html");
return;
}

$dao->closeConnection();

?>
</body>
</html>