#pragma strict

public var bullet : GameObject;
public var muzzle : Transform;
public var shotpower : float;

public var bulletMax : int;
private var bulletCount : int = 0;

public var se : AudioClip;
public var reload : AudioClip;

function Start () {

}

function Update () {
	if(Input.GetButton("Fire1")) {
		Shot();
	}
}

function Shot() {
	if(bulletCount > bulletMax) {
		audio.PlayOneShot(reload);
		yield WaitForSeconds(2.5);
		bulletCount = 0;
		return;
	}
	
	audio.PlayOneShot(se);
	
	var obj : GameObject = GameObject.Instantiate(bullet);
	obj.transform.position = muzzle.position;
	obj.rigidbody.AddForce(-transform.forward * shotpower);
	Destroy(obj, 1);
}
