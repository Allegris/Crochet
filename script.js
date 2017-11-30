var camera, scene, renderer;
var geometry, material, mesh;



function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	
	geometry = new THREE.BoxGeometry( 0.2, 0.5, 0.10);//Size of box
	material = new THREE.MeshNormalMaterial();
	
	//Mesh1
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	//Mesh 2
	mesh2 = new THREE.Mesh( geometry, material );
	scene.add( mesh2 );
	mesh2.position.set(0.2,0,0);
	
	//Mesh 3
	mesh3 = new THREE.Mesh( geometry, material );
	scene.add( mesh3 );
	mesh3.position.set(-0.2,0,0);

	
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	mesh2.rotation.x += 0.01;
	mesh2.rotation.y += 0.02;
	
	mesh3.rotation.x += 0.01;
	mesh3.rotation.y += 0.02;
	
	renderer.render( scene, camera );

}
