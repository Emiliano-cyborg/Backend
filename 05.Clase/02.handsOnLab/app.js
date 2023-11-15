import UserManager from "./managers/UserManager.js";

const path = './files/Users.json'

const env = async () => {
   /*  let usuarios = await UserManager.getUsuarios(); */
    let user = {
        nombre: 'Luis',
        apellido: 'Sol',
        nombreUsuario: 'luisSol',
        contrasena: '123456'
    }
    let usuarios = await UserManager.crearUsuario(user)
    await UserManager.validarUsuario('luisSol','12345')
    await UserManager.validarUsuario('luisSol','12345888')
    await UserManager.validarUsuario('luisS','12345888')
    /* console.log(usuarios); */
}