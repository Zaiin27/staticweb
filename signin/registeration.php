<?php
    header("Access-Control-Allow-Methods: GET,POST");
    header("Access-Control-Allow-Origin: http://localhost:3000",'https://oo2.shop');
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Credentials: true");


    $conn= new mysqli("localhost","root","","user_auth");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $eData=file_get_contents("php://input");
        $dData=json_decode($eData,true);

        $email= $dData['email'];
        $password= $dData['password'];

        $result = " ";

        
        if($email != "" && $password != ""){
            $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
            $res = mysqli_query($conn,$sql);
            if($res){
                $result = "User added successfully";
            }
            else{
                $result = "Error in adding user";
            }
        }
        else{
            $result = "Email and password should not be empty";
        }

        $conn -> close();
        $response[]=array("result"=>$result);
        echo json_encode($response);
    }
?>