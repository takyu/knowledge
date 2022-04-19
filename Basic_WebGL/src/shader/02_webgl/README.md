# Helper Functions

## clamp

clamp returns the value of x constrained to the range minVal to maxVal.  
The returned value is computed as min(max(x, minVal), maxVal).  
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/clamp.xhtml>

```glsl
genType clamp(
  genType x,
  genType minVal,
  genType maxVal
)
genType clamp(
  genType x,
  float minVal,
  float maxVal
)
```

## mix

mix performs a linear interpolation between x and y using a to weight between them.  
The return value is computed as x×(1−a)+y×a.  
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/mix.xhtml>

```glsl
genType mix(
  genType x,
  genType y,
  genType a
)
genType mix(
  genType x,
  genType y,
  float a
)
```

## step

step generates a step function by comparing x to edge.  
The value of x that are smaller than edge are set to 0.0, and those that are not are set to 1.0.  
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/step.xhtml>

```glsl
genType step(
  genType edge,
  genType x
)
genType step(
  float edge,
  genType x
)
```

## smoothstep

smoothstep performs smooth Hermite interpolation between 0 and 1 when edge0 < x < edge1.  
This is useful in cases where a threshold function with a smooth transition is desired.  
<https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/smoothstep.xhtml>

```glsl
genType smoothstep(
  genType edge0,
  genType edge1,
  genType x
)
genType smoothstep(
  float edge0,
  float edge1,
  genType x
)
```

For other built-in functions, refer to [this site](https://www.khronos.org/registry/OpenGL-Refpages/)
