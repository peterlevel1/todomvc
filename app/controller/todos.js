exports.index = async ctx => {
  const res = await ctx.model.Todos.findAll();
  ctx.logger.info('find result: ' + JSON.stringify(res));

  ctx.body = { success: true, data: res };
}

exports.save = async ctx => {
  await ctx.model.Todos.destroy({ truncate: true });
  await ctx.model.Todos.bulkCreate(ctx.request.body.map(item => {
    delete item.updatedAt;
    return item;
  }));
  ctx.logger.info('=== save ===');
  ctx.body = { success: true };
};
