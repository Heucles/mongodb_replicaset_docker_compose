cfg = rs.conf();
cfg.members[0].priority = 3;
cfg.members[1].priority = 1;
cfg.members[2].priority = 1;
rs.reconfig(cfg,{ force: true });
