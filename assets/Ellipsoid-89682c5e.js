class i{constructor(s,t,e,h){this.semiMajorAxis=s,this.flattening=t,this.outerAtmosphereRimWidth=e;const n=1-this.flattening;this.semiMinorAxis=this.semiMajorAxis*n,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=h||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const a=new i(6378137,1/298.257223563,3e5,.006694379990137799),m=new i(3396190,1/169.8944472236118,23e4),o=new i(1737400,0,0);export{o as e,a as s,m as t};
