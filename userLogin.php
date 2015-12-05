<?php

require("Conn.php");
require("MySQLDao.php");
$email = htmlentities($_POST["email"]);
$password = htmlentities($_POST["password"]);
$returnValue = array();

if(empty($email) || empty($password))
{
$returnValue["status"] = "error";
$returnValue["message"] = "Missing required field";
echo json_encode($returnValue);
//echo "<script>window.location = 'http://haddyclipk1.comxa.com/login.html'</script>";
return;
}

$secure_password = md5($password);
echo "$secure_password";
$dao = new MySQLDao();
$dao->openConnection();
$userDetails = $dao->getUserDetailsWithPassword($email,$secure_password);

if(!empty($userDetails))
{
$returnValue["status"] = "Success";
$returnValue["message"] = "Login successfully!";
//echo json_encode($returnValue);
echo "<script>window.location = 'http://haddyclipk1.comxa.com/advanture.html'</script>";
} else {

$returnValue["status"] = "error";
$returnValue["message"] = "Email address or password is wrong.";
echo json_encode($returnValue);
//echo "<script>window.location = 'http://haddyclipk1.comxa.com/login.html'</script>";
}

$dao->closeConnection();

?>
