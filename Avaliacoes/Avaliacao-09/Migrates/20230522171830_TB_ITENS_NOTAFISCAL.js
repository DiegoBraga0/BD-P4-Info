/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ITENS_NOTAFISCAL', table => {
        table.integer('QTD').notNull()
        table.double('VALOR').notNull()
        table.integer('NUM_NF').unsigned()
        table.integer('COD_CLI').unsigned()
        table.foreign('NUM_NF').references('TB_NOTAS_FISCAIS.id')
        table.foreign('COD_CLI').references('TB_PRODUTOS.id')
        table.primary(['NUM_NF', 'COD_CLI'])
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
    return knex.schema.dropTable('TB_ITENS_NOTAFISCAL')
};
