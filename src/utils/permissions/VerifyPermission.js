import { getUserGroupController } from "../../useCases/GetUserGroup"
import { getGroupPermissionsController } from "../../useCases/GetGroupPermissions"
import { listPermissionsController } from "../../useCases/ListPermissions"

const verifyPermission = (permission) => {
    return async (req, res, next) => {
        var has_permission = false
        var grupo = await getUserGroupController.handle(req.userId)
        if(!grupo.data[0]) return res.status(400).json({ has_error: true, error: "Usuário com esse token não existe" })
        var grupo_permissoes = await getGroupPermissionsController.handle(grupo.data[0].grupo_id)
        var permissoes = await listPermissionsController.handle()
        var filtro_permissoes = []
        if (grupo_permissoes.has_error) return res.status(400).json(grupo_permissoes)
        if (grupo.has_error) return res.status(400).json(grupo)
        if (permissoes.has_error) return res.status(400).json(permissoes)
        await grupo_permissoes.data.map(grupo_permissao => {
            permissoes.data.map(permissao => {
                if (grupo_permissao.permissao_id == permissao.id) filtro_permissoes.push(permissao)
            })
        })
        if (!grupo.data[0].grupo_id) return res.status(400).json({ has_error: true, error: "Usuário não possui papel" })
        await filtro_permissoes.map(permissao => {
            if (permission == permissao.nome) {
                has_permission = true
            }
        })
        
        has_permission ? next() : res.status(403).json({ has_error: true, error: "Usuário não tem permissão" })
    }

}

module.exports = { verifyPermission }
