import ChatComposite from "../../components/chat/ChatComposite";
import EnvMgr from "../../lib/EnvMgr";

export default async function Page() {
  const envMgr = await EnvMgr();
  if (!envMgr.DEBUG)
    return (
      <div>
        <h1>Feature Disabled</h1>
      </div>
    );
  return (
    <div>
      <h1>Chat</h1>
      <div>
        <ChatComposite />
      </div>
    </div>
  );
}
