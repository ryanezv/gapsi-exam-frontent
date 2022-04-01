/*
* Use of Factory Pattern for easy to use anywhere across our application
* */
import SupplierRepository from '@/services/SupplierService'
import UserRepository from '@/services/UserService'
import AppRepository from '@/services/AppService'

const repositories = {
    suppliers: SupplierRepository,
    users: UserRepository,
    app: AppRepository
}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}
