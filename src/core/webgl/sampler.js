SceneJS._webgl.Sampler = function (gl, program, name, type, size, location) {
    this.bindTexture = function (texture, unit) {
        if (texture.bind(unit)) {
            gl.uniform1i(location, unit);
            return true;
        }
        return false;
    };
};
