/* import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    constructor(path){
        this.path = path
    }


    getUsuarios = async ()  => {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const usuarios = JSON.parse(data);
            return usuarios;
        }else {
            return[]; 
        }
    }

    crearUsuario = async (usuario) => {
        const usuarios = await this.getUsuarios();
        if(usuarios.length === 0){
            usuario.id = 1;
        }else{
            usuario.id = usuarios[usuarios.length-1].id + 1;
        }

        usuario.salt = crypto.randomBytes(128).toString('base64');
        usuario.contrasena = crypto.createHmac('sha256',usuario.salt).update(usuario.contrasena).digest('hex');

        usuario.push(usuario);
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios,null,'\t'))
        return usuarios

    }
    validarUsuario = async (username, contrasena) =>{
        const usuarios = await this.getUsuarios();
        const usuarioIndex = usuarios.findIndex(u=Z u.username == usuername);
        
        if(usuarioIndex === -1){
            return 'El usuario no existe';

        }
        const usuario = usuarios[usuarioIndex];
        const newHash = crypto.createHmac('sha256', usuario.salt).update(contrasena).digest('hex');
        
    }

}
 */