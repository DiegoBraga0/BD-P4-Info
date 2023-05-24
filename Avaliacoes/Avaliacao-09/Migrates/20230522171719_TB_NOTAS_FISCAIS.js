/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_NOTAS_FISCAIS', table => {
        table.integer('NUM_NF').primary()
        table.integer('COD_CLI').notNull()
        table.integer('COD_VEND').notNull()
        table.string('SERIE_NF').notNull() 
        table.foreign('COD_CLI').references('TB_CLIENTES.id')
        table.foreign('COD_VEND').references('TB_VENDEDORES.id')
    })/*.then(function () {
        return knex('perfis').insert([
            { nome: 'comum', rotulo: 'Comum' },
            { nome: 'admin', rotulo: 'Administrador' },
        ])
    })*/
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_NOTAS_FISCAIS')
};
