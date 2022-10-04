import type { NextPage } from "next";
import Head from "next/head";
import { AboutSection } from "./components/content/aboutSection/AboutSection";
import { AddMessageInfo } from "./components/content/addMessageInfo/AddMessageInfo";
import { KnowledgeSection } from "./components/content/knowledgeSection/KnowledgeSection";
import { MessageSection } from "./components/content/messageSection/MessageSection";
import { WelcomeSection } from "./components/content/welcomeSection/WelcomeSection";
import { Menu } from "./components/menu/Menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IDS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <WelcomeSection />
        <AboutSection />
        <MessageSection />
        <AddMessageInfo />
        {/* <KnowledgeSection /> */}
      </main>
    </div>
  );
};

export default Home;
