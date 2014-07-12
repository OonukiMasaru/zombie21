#pragma strict

public var searchTag : String = "Player";
public var messageTarget : GameObject;
public var message : String;

function Start () {

}

function Update () {

}

function OnTriggerStay(col : Collider) {
	if(col.tag == searchTag) {
		messageTarget.SendMessage(message, col.gameObject);
	}
}

