import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Surface,
  Inline,
  PageContainer,
  Pill,
  SectionHeader,
  Stack,
} from "@tomny-dev/uzi";

const interests = [
  "React",
  "TypeScript",
  "Node.js",
  "Unity / Godot",
  "EOSIO",
  "Web3",
  "DevOps",
  "AI",
  "Cloud Computing",
  "Python",
  "Homelab",
  "Automation",
];

const About = () => {
  return (
    <section aria-label="About me">
      <PageContainer maxWidth="md" className="portfolio-section">
        <Surface padding="lg" bordered radius="lg">
          <Stack gap="lg">
            <SectionHeader title="About Me" />

            <div className="about-layout">
              <Avatar size="xl" className="about-avatar">
                <AvatarImage src="/turtle.jpg" alt="Tom" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>

              <Stack gap="md" className="about-copy">
                <p>Hey, I'm Tom! Nice to meet you! 👋</p>
                <p>
                  I'm a Full Stack Software Developer passionate about building systems from the
                  ground up and constantly pushing into new technical territory. My curiosity drives
                  me to explore emerging technologies and frameworks that challenge my thinking and
                  expand my toolkit.
                </p>
                <p>
                  Lately, I've been diving into areas like <strong>game development</strong>,{" "}
                  <strong>blockchain</strong> systems, and experimenting with{" "}
                  <strong>AI and machine learning</strong>. I enjoy turning complex ideas into clean,
                  functional products — and I'm always learning, always shipping.
                </p>
              </Stack>
            </div>

            <div>
              <h3 className="interests-title">Current Interests &amp; Tools</h3>
              <Inline gap="sm" wrap className="tech-list">
                {interests.map((interest) => (
                  <Pill key={interest}>{interest}</Pill>
                ))}
              </Inline>
            </div>
          </Stack>
        </Surface>
      </PageContainer>
    </section>
  );
};

export default About;
