### General screen depiction flow

```text
CPU → GPU → Display
```

- CPU

	Send some kind of drawing instruction to the GPU

- GPU

	1. Calculate how to display on the display

	2. Send the instruction which color to show for each pixel to the display

In case of WebGL,

- CPU

	JavaScript ( WebAPI )

- GPU

	Shader

### Shading

It is the process of defining how an object looks in 3D space, taking into account light reflections and other factors.

### Shader

A program that performs shading is a shader.

### Programmable Shader

Shaders that can be manipulated by the developer.  
In case of WebGL, Vertex shader, Fragment shader etc..

### GPU processing of WebGL

```text
Vertex Shader → ... → rasterize → Fragment Shader → ... → Frame Buffer → Display
```

It is important to note that the ***Fragment Shader*** is performed after the ***Vertex Shader*** is performed.

## Vertex Shader

Determine the position of the vertices after it passes object vertices to gl_Position.  
***Execute function at each vertex.***

```c
void main() {
	vUv = uv;

	// position is represented the position of each vertex. 
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

## Fragment Shader

Determine the color of fragment ( pixel ) by gl_FragColor.  
\* In 3D graphics, pixel are called fragment.  

***Execute function at each fragment ( pixel ).***

```c
void main() {
    gl_FragColor = vec4(vUv, 0.5, 1.0);
}
```

### Data transfer

- JavaScript to Vertex Shader

	- uniform

	- attribute

- JavaScript to Fragment Shader

	- uniform

- Vertex Shader to Fragment Shader

	- varying

## attribute

The data that can be received at each vertex.  
***A different value is passed for each vertex.***

```c
attribute vec3 position;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

For instance,

```c
attribute vec2 xyPos;

// Different x,y coordinates can be passed for each vertex
vertexA: (0,0)
vertexB: (1,2)
vertexC: (2,0)

// → Positive Triangle
```

## uniform
The data that can be received by Vertex Shader, Fragment Shader.  
***The same value is passed each vertex, each fragment.***

- Vertex Shader

	```c
	uniform vec4 uSomeVal;
	void main() {
		gl_position = uSomeVal;
	}
	```

- Fragment Shader

	```c
	uniform vec4 uSomeVal;
	void main() {
		gl_FragColor = uSomeVal;
	}
	```

## varying

The data that passes from Vertex Shader to Fragment Shader.  
***A different value is passed for each vertex.***

- Vertex Shader ( Pass )

	```c
	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
	```

- Fragment Shader ( Passed )

	```c
	varying vec2 vUv;

	void main() {
		vec4 color = vec4(vUv, 0.5, 1.0);
		gl_FragColor = color;
	}
	```

The vertex shader is executed for each vertex and the fragment shader is executed for each fragment, so there is no one-to-one.  
Therefore, To be one-to-one, values which are done [***linear interpolation***](https://en.wikipedia.org/wiki/Linear_interpolation) are passed to fragments between vertices.

## uv coordinates (texture coordinates)

Coordinates in texture space, assigned as vertex attributes and/or calculated in vertex shaders, used for texture lookup,  
defining the mapping from texture space to a 3D model surface or any rendering primitive.  
Mainly a coordinate system used to extract color information from sampler2D textures.

```text
(0, 0) ~ (1, 1)
```

## clip coordinates

Clip coordinates finally processed by gl_position.  
<https://en.wikipedia.org/wiki/Clip_coordinates>

```text
(0, 0, 0) ~ (1, 1 ,1)
```

### WebGL Processing Flow

1. Object coordinates ( Model coordinates )

	Object's own coordinates.  
	It is the position of ***attribute***.

	↓ transformation ( model matrix ( using position, rotate, scale of ***Mesh***) )

2. World coordinates

	Coordinates in 3D space.  
	Also, Coordinates in space after being added to scene.

	↓ transformation ( view matrix ( using position, rotate of ***Camera*** ) )

3. Viewpoint coordinates

	Coordinates considering camera position and angle.

	↓ transformation ( ***projectionMatrix*** ( using PerspectiveCamera, OrthographicCamera of ***Camera*** ) )

4. Clip coordinates

	Coordinates finally processed by gl_position.

Also, the transformation from 1 to 3 is called ***modelViewMatrix***.

## PerspectiveCamera

Use to create a sense of perspective.  
<https://threejs.org/docs/#api/en/cameras/PerspectiveCamera>

```ts
PerspectiveCamera(
	fov : number,
	aspect : number,
	near : number,
	far : number
);
```

### Constructor of PerspectiveCamera

- ***aspec***t

	Camera frustum aspect ratio, usually the canvas width / canvas height.  
	Default is 1 (square canvas).

- ***near***

	Camera frustum near plane.  
	Default is 0.1.

- ***far***

	Camera frustum far plane.  
	Default is 2000.  
	Must be greater than the current value of near plane.

- ***fov***

	Camera frustum vertical field of view, from bottom to top of view, in degrees.  
	Default is 50.

## OrthographicCamera

Use when perspective is not desired.  
<https://threejs.org/docs/#api/en/cameras/OrthographicCamera>

```ts
OrthographicCamera(
	left : number,
	right : number,
	top : number,
	bottom : number,
	near : number,
	far : number
);
```

### Constructor of OrthographicCamera

- left

	Camera frustum left plane.

- right

	Camera frustum right plane.

- top

	Camera frustum top plane.

- bottom

	Camera frustum bottom plane.

- near

	Camera frustum near plane.  
	Default is 0.1.

- far

	Camera frustum far plane.  
	Default is 2000.
