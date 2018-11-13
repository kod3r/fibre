

var _presets_table = {

    'none': ``,

    'lorenz': `{"R":{"rayBatch":128,"maxTimeSteps":128,"maxIterations":100,"integrationTime":1,"gridSpace":0.15440285248241178,"record_realtime":true,"xmin":-29.703284119569204,"xmax":36.41007732067149,"ymin":-30.761883867431244,"ymax":34.8976678036754,"zmin":-7.099020364369787,"zmax":58.552581487655026,"clipToBounds":true,"showBounds":true,"exposure":-5.367914425527647,"gamma":2.2,"subtractive_color":false,"bgColor":[0,0,0],"tubeWidth":0.001,"tubeSpread":false,"hairShader":true,"hairShine":10,"hairSpecColor":[1,1,1],"depthTest":false,"dash_spacing":0.05,"dash_speed":10,"dash_size":0.5,"dashes":false},"C":{"pos":[-131.60092964225197,56.140558643067735,-47.49358251457521],"tar":[3.616476685246679,-9.15130126660645,24.575792393973554],"near":0.03464101615137755,"far":34641.016151377546},"E":{"code":"\\n///////////////////////////////////////////\\n// Lorenz attractor\\n///////////////////////////////////////////\\n\\nconst float rho   = float(28.0);     \\nconst float sigma = float(10.0);\\nconst float beta  = float(8.0)/float(3.0);\\n\\n#define rgb vec3\\n\\nconst vec3 colLo = rgb(255,20,55) / 255.0;\\nconst vec3 colHi = rgb(0,40,219) / 255.0;\\nconst float magScale = float(195);\\n\\n vec3 velocity(vec3 p, float t)\\n {\\n     vec3 v;\\n     float x = p.x;\\n     float y = p.y;\\n     float z = p.z;\\n     v.x = sigma*(y - x);\\n     v.y = x*(rho - z);\\n     v.z = x*y - beta*z;\\n     return v;\\n }    \\n \\nvec3 color(vec3 p, float t)\\n{\\n    vec3 E = velocity(p, t);\\n  \\tfloat mag2 = dot(E,E) / (magScale*magScale);\\n    float lerp = mag2/(1.0+mag2);\\n    return (1.0-lerp)*colLo + lerp*colHi;\\n}  \\n"}}`,

    'dipole': `{"R":{"rayBatch":138,"maxTimeSteps":200,"maxIterations":523.1983407359041,"integrationTime":5,"integrateForward":false,"gridSpace":0.11028775177315127,"record_realtime":true,"xmin":-2.26270133836598,"xmax":2.1372986616340204,"ymin":-2.6026081243858643,"ymax":2.289109496916927,"zmin":-0.5292993077458352,"zmax":0.293720152427974,"clipToBounds":false,"showBounds":true,"exposure":-2.5000027573519272,"gamma":2.2,"subtractive_color":false,"bgColor":[0,0,0],"tubeWidth":0.0033086325531945385,"tubeSpread":false,"specShine":15.440285248241178,"specColor":[0.019607843137254943,0.019607843137254943,0.019607843137254943],"depthTest":true,"dash_spacing":0.4963233469399448,"dash_speed":10,"dash_size":0.3088234158737434,"dashes":false,"hairShader":true,"hairShine":10,"hairSpecColor":[1,1,1]},"C":{"pos":[-2.9806983455175704,0.6919297069188497,-6.0316836326670416],"tar":[-0.2264894540590715,-0.2861774462838242,0.24636753499397263],"near":0.03464101615137755,"far":34641.016151377546},"E":{"code":"///////////////////////////////////////////\\n// Dipole field\\n///////////////////////////////////////////\\n\\n#define rgb vec3\\n\\nconst vec3 colLo = rgb(0,6,183) / 255.0;\\nconst vec3 colHi = rgb(239,11,0) / 255.0;\\nconst float magScale = 2.4;\\n\\nvec3 E(float q, in vec3 p, vec3 c)\\n{\\n    vec3 pc = p - c;\\n    float r2 = dot(pc, pc);\\n    vec3 E = q * (p-c) / (pow(r2, 1.5) + 1.0e-2);\\n    return E;\\n}\\n\\nvec3 velocity(vec3 p, float t)\\n{\\n    vec3 x0 = vec3(0,  0.5, 0);\\n    vec3 x1 = vec3(0, -0.5, 0);\\n    return E(-1.0, p, x0) + E(1.0, p, x1);\\n}    \\n\\nvec3 color(vec3 p, float t)\\n{\\n    vec3 E = velocity(p, t);\\n  \\tfloat mag2 = dot(E,E) / (magScale*magScale);\\n    float lerp = mag2/(1.0+mag2);\\n    return (1.0-lerp)*colLo + lerp*colHi;\\n}  \\n"}}`,

    'quadrupole': `{"R":{"rayBatch":128,"maxTimeSteps":319,"maxIterations":100,"integrationTime":10,"gridSpace":0,"record_realtime":true,"xmin":-0.9669137035558169,"xmax":1.0330862964441834,"ymin":-0.8397981313184116,"ymax":1.0983277029588778,"zmin":-0.8517073324695545,"zmax":0.8906642808163128,"clipToBounds":false,"showBounds":true,"exposure":-4.265036907796134,"gamma":2.2,"subtractive_color":false,"bgColor":[0,0,0],"tubeWidth":0,"tubeSpread":false,"hairShader":false,"hairShine":10,"hairSpecColor":[1,1,1],"depthTest":false,"dash_spacing":0.3308632553194538,"dash_speed":11.028775177315127,"dash_size":0.7720142624120588,"dashes":false},"C":{"pos":[3.5044845511772165,0.8172274498976062,-6.700395192068965],"tar":[-0.07949848674249538,-0.03437843530486278,0.030694790099949094],"near":0.03464101615137755,"far":34641.016151377546},"E":{"code":"///////////////////////////////////////////\\n// Quadrupole field\\n///////////////////////////////////////////\\n\\n#define rgb vec3\\n\\nconst vec3 colLo = rgb(0,20,209) / 255.0;\\nconst vec3 colHi = rgb(255,20,51) / 255.0;\\nconst float magScale = float(4.7731968);\\n\\nconst float q1 = 1.0;\\nconst float q2 = 1.0;\\nconst float q3 = -1.0;\\nconst float q4 = -1.0;\\n\\nvec3 E(float q, in vec3 p, vec3 c)\\n{\\n    vec3 pc = p - c;\\n    float r2 = dot(pc, pc);\\n    vec3 E = q * (p-c) / (pow(r2, 1.5) + 1.0e-2);\\n    return E;\\n}\\n\\nvec3 velocity(vec3 p, float t)\\n{\\n    vec3 x1 = vec3(0,  0.5, 0);\\n    vec3 x2 = vec3(0, -0.5, 0);\\n  \\tvec3 x3 = vec3(0.5,  0, 0);\\n    vec3 x4 = vec3(-0.5, 0, 0);\\n    return  E(q1, p, x1) + E(q2, p, x2)\\n          + E(q3, p, x3) + E(q4, p, x4);\\n}    \\n\\nvec3 color(vec3 p, float t)\\n{\\n    vec3 E = velocity(p, t);\\n  \\tfloat mag2 = dot(E,E) / (magScale*magScale);\\n    float lerp = mag2/(1.0+mag2);\\n    return (1.0-lerp)*colLo + lerp*colHi;\\n}  \\n"}}`,

    'lorenz2': `{"R":{"rayBatch":128,"maxTimeSteps":319,"maxIterations":100,"integrationTime":2,"gridSpace":0.18748917801435716,"record_realtime":false,"xmin":-34.251030587295915,"xmax":-29.12282936183321,"ymin":15.842657555872435,"ymax":18.631080771886623,"zmin":-7.86202193786743,"zmax":6.529305756707535,"clipToBounds":false,"showBounds":true,"exposure":-0.956404354601597,"gamma":0.4632085574472353,"subtractive_color":false,"bgColor":[0.196078431372549,0.196078431372549,0.196078431372549],"tubeWidth":0.009815609907810463,"tubeSpread":false,"specShine":2.2057550354630253,"specColor":[0.7352941176470589,0.598327566320646,0.598327566320646],"depthTest":true,"dash_spacing":0.05,"dash_speed":10,"dash_size":0.5,"dashes":false,"hairShader":true,"hairShine":10,"hairSpecColor":[1,1,1]},"C":{"pos":[-135.64169107528676,47.79408021315483,-1.008157834627287],"tar":[-1.7522028773762353,-13.09067808599392,30.002818912941958],"near":0.03464101615137755,"far":34641.016151377546},"E":{"code":"\\n///////////////////////////////////////////\\n// Lorenz attractor\\n///////////////////////////////////////////\\n\\nconst float rho   = float(28.0);     \\nconst float sigma = float(10.0);\\nconst float beta  = float(8.0)/float(3.0);\\n\\n#define rgb vec3\\n\\nconst vec3 colLo = rgb(255,255,255) / 255.0;\\nconst vec3 colHi = rgb(252,213,130) / 255.0;\\nconst float magScale = float(195);\\n\\n vec3 velocity(vec3 p, float t)\\n {\\n     vec3 v;\\n     float x = p.x;\\n     float y = p.y;\\n     float z = p.z;\\n     v.x = sigma*(y - x);\\n     v.y = x*(rho - z);\\n     v.z = x*y - beta*z;\\n     return v;\\n }    \\n \\nvec3 color(vec3 p, float t)\\n{\\n    vec3 E = velocity(p, t);\\n  \\tfloat mag2 = dot(E,E) / (magScale*magScale);\\n    float lerp = mag2/(1.0+mag2);\\n    return (1.0-lerp)*colLo + lerp*colHi;\\n}  \\n"}}`,

    'lorenz3': `{"R":{"rayBatch":128,"maxTimeSteps":319,"maxIterations":100,"integrationTime":4,"integrateForward":true,"gridSpace":0.2536618290782479,"tubeWidth":0.030880570496482358,"tubeSpread":false,"record_realtime":false,"xmin":-30.490255037216784,"xmax":-25.36205381175408,"ymin":20.56811055216703,"ymax":23.35653376818122,"zmin":-8.368845891054127,"zmax":6.022481803520838,"clipToBounds":false,"showBounds":true,"exposure":1.0287751773151257,"gamma":1.3565393468097606,"subtractiveColor":true,"bgColor":[1,1,1],"hairShader":false,"specShine":1.1028775177315127,"specColor":[1,1,1],"depthTest":true,"dash_spacing":0.05,"dash_speed":10,"dash_size":0.5,"dashes":false,"subtractive_color":false,"hairShine":10,"hairSpecColor":[1,1,1]},"C":{"pos":[-97.24813641850449,44.80839194778983,46.29889623164527],"tar":[-1.0560348651126519,-7.884391053452633,32.88240073132292],"near":0.03464101615137755,"far":34641.016151377546},"E":{"code":"\\n///////////////////////////////////////////\\n// Lorenz attractor\\n///////////////////////////////////////////\\n\\nconst float rho   = float(28.0);     \\nconst float sigma = float(10.0);\\nconst float beta  = float(8.0)/float(3.0);\\n\\n#define rgb vec3\\n\\nconst vec3 colLo = rgb(12,31,140) / 255.0;\\nconst vec3 colHi = rgb(3,42,149) / 255.0;\\nconst float magScale = float(195);\\n\\n vec3 velocity(vec3 p, float t)\\n {\\n     vec3 v;\\n     float x = p.x;\\n     float y = p.y;\\n     float z = p.z;\\n     v.x = sigma*(y - x);\\n     v.y = x*(rho - z);\\n     v.z = x*y - beta*z;\\n     return v;\\n }    \\n \\nvec3 color(vec3 p, float t)\\n{\\n    vec3 E = velocity(p, t);\\n  \\tfloat mag2 = dot(E,E) / (magScale*magScale);\\n    float lerp = mag2/(1.0+mag2);\\n    return (1.0-lerp)*colLo + lerp*colHi;\\n}  \\n"}}`

};


var Presets = function()
{
    this.preset_names = [];
    for (var preset_name in _presets_table) {
        if (_presets_table.hasOwnProperty(preset_name)) {
            this.preset_names.push(preset_name);
        }
    }
}

Presets.prototype.get_preset_names = function()
{
    return this.preset_names;
}


Presets.prototype.get_preset = function(preset_name)
{
    return this.preset_names[preset_name];
}

Presets.prototype.load_preset = function(preset_name)
{
    if (preset_name in _presets_table)
    {
        let preset = _presets_table[preset_name];
        let state = JSON.parse(preset);
        fibre.preset_selection = preset_name;
        fibre.load_state(state);
    }
    
}