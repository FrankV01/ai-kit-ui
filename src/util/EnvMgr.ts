const EvtMgr = {
  port: Number.parseInt(process.env.PORT || "3000"),
  topic: process.env.TOPIC || "Debug",
};
export { EvtMgr };
