import { useState, useEffect } from "react";
import {
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Card,
  Pill,
  Input,
  Label,
  Checkbox,
  Select,
  Modal,
  Alert,
  Skeleton,
  Progress,
  ThemeToggleButton,
} from "@tomny-dev/uzi";
import styles from "./Showcase.module.css";
import {
  Check,
  Copy,
  ChevronLeft,
  Code2,
  Eye,
} from "lucide-react";

type ShowcaseComponent = {
  name: string;
  render: () => React.ReactNode;
  code: string;
};

// --- Render components (must start with uppercase for React hooks) ---

const ButtonPreview = () => (
  <div className={styles.previewRow}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
);

const AvatarPreview = () => (
  <div className={styles.previewRow}>
    <Avatar size="sm">
      <AvatarImage src="/turtle.jpg" alt="Tom" />
      <AvatarFallback>T</AvatarFallback>
    </Avatar>
    <Avatar size="md">
      <AvatarImage src="/turtle.jpg" alt="Tom" />
      <AvatarFallback>T</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage src="/turtle.jpg" alt="Tom" />
      <AvatarFallback>T</AvatarFallback>
    </Avatar>
  </div>
);

const CardPreview = () => (
  <div className={styles.previewRow}>
    <Card tone="default" padding="md">Default</Card>
    <Card tone="muted" padding="md">Muted</Card>
    <Card tone="contrast" padding="md">Contrast</Card>
  </div>
);

const PillPreview = () => (
  <div className={styles.previewRow}>
    <Pill tone="neutral" size="sm">Neutral</Pill>
    <Pill tone="success" size="sm">Success</Pill>
    <Pill tone="warning" size="sm">Warning</Pill>
    <Pill tone="info" size="sm">Info</Pill>
    <Pill tone="danger" size="sm">Danger</Pill>
  </div>
);

const InputPreview = () => (
  <div className={styles.previewBlock}>
    <Input placeholder="Type something..." />
  </div>
);

const LabelPreview = () => (
  <div className={styles.previewBlock}>
    <Label>Interactive Label</Label>
  </div>
);

const CheckboxPreview = () => (
  <div className={styles.previewBlock}>
    <Checkbox id="showcase-check" />
    <Label htmlFor="showcase-check">I agree to the terms</Label>
  </div>
);

const SelectPreview = () => {
  const [value, setValue] = useState("react");
  return (
    <div className={styles.previewBlock}>
      <Select
        options={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Angular", value: "angular" },
        ]}
        value={value}
        onChange={setValue}
        placeholder="Pick a framework"
      />
    </div>
  );
};

const AlertPreview = () => (
  <div className={styles.previewColumn}>
    <Alert tone="info">This is an info alert.</Alert>
    <Alert tone="warning">Warning: check your input.</Alert>
    <Alert tone="error">Error: something went wrong.</Alert>
  </div>
);

const SkeletonPreview = () => (
  <div className={styles.previewRow}>
    <Skeleton width="120px" height="20px" />
    <Skeleton width="200px" height="40px" />
    <Skeleton width="80px" height="80px" />
  </div>
);

const ProgressPreview = () => (
  <div className={styles.previewBlock}>
    <Progress value={65} aria-label="65% complete" />
  </div>
);

const ModalPreviewInner = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.previewBlock}>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Hello">
        <p>This is a modal dialog.</p>
      </Modal>
    </div>
  );
};

const ThemeTogglePreview = () => (
  <div className={styles.previewBlock}>
    <ThemeToggleButton />
  </div>
);

// --- Showcase data ---

const showcaseComponents: ShowcaseComponent[] = [
  {
    name: "Button",
    code: `<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,
    render: ButtonPreview,
  },
  {
    name: "Avatar",
    code: `<Avatar src="/turtle.jpg" alt="Tom" size="lg" />
<AvatarFallback>A</AvatarFallback>`,
    render: AvatarPreview,
  },
  {
    name: "Card",
    code: `<Card tone="default" padding="md">Default</Card>
<Card tone="muted" padding="md">Muted</Card>
<Card tone="contrast" padding="md">Contrast</Card>`,
    render: CardPreview,
  },
  {
    name: "Pill",
    code: `<Pill tone="neutral" size="sm">Neutral</Pill>
<Pill tone="success" size="sm">Success</Pill>
<Pill tone="warning" size="sm">Warning</Pill>
<Pill tone="info" size="sm">Info</Pill>
<Pill tone="danger" size="sm">Danger</Pill>`,
    render: PillPreview,
  },
  {
    name: "Input",
    code: `<Input placeholder="Type something..." />`,
    render: InputPreview,
  },
  {
    name: "Label",
    code: `<Label>Click me</Label>`,
    render: LabelPreview,
  },
  {
    name: "Checkbox",
    code: `<Checkbox id="agree" />
<label htmlFor="agree">I agree to the terms</label>`,
    render: CheckboxPreview,
  },
  {
    name: "Select",
    code: `<Select
  options={[
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' }
  ]}
  placeholder="Pick a framework"
/>`,
    render: SelectPreview,
  },
  {
    name: "Alert",
    code: `<Alert tone="info">This is an info alert.</Alert>
<Alert tone="warning">Warning: check your input.</Alert>
<Alert tone="danger">Error: something went wrong.</Alert>`,
    render: AlertPreview,
  },
  {
    name: "Skeleton",
    code: `<Skeleton width="200px" height="40px" />`,
    render: SkeletonPreview,
  },
  {
    name: "Progress",
    code: `<Progress value={65} max={100} />`,
    render: ProgressPreview,
  },
  {
    name: "Modal",
    code: `const [open, setOpen] = useState(true);
<Modal open={open} onClose={() => setOpen(false)} title="Hello">
  <p>This is a modal dialog.</p>
</Modal>`,
    render: ModalPreviewInner,
  },
  {
    name: "Theme Toggle",
    code: `<ThemeToggleButton />`,
    render: ThemeTogglePreview,
  },
];

const ShowcasePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#showcase") {
        setActiveIndex(0);
      } else if (hash === "#home" || hash === "") {
        setActiveIndex(null);
      } else {
        const idx = parseInt(hash.replace("#", ""), 10);
        if (!isNaN(idx) && idx >= 0 && idx < showcaseComponents.length) {
          setActiveIndex(idx);
        } else {
          setActiveIndex(0);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (activeIndex === null) return null;

  const active = showcaseComponents[activeIndex];

  return (
    <div className={styles.container}>
      {/* Back button */}
      <button onClick={() => (window.location.hash = "#home")} className={styles.backBtn}>
        <ChevronLeft size={20} /> Back to Home
      </button>

      {/* Component list sidebar */}
      <nav className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Components</h3>
        {showcaseComponents.map((comp, i) => (
          <button
            key={i}
            onClick={() => (window.location.hash = `#${i}`)}
            className={`${styles.sidebarItem} ${activeIndex === i ? styles.active : ""}`}
          >
            {comp.name}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main className={styles.main}>
        <header className={styles.componentHeader}>
          <h1>{active.name}</h1>
          <div className={styles.headerActions}>
            <ThemeToggleButton />
          </div>
        </header>

        {/* Live preview */}
        <section className={styles.previewSection}>
          <h2 className={styles.sectionTitle}>
            <Eye size={20} /> Live Preview
          </h2>
          <div className={styles.previewArea}>{active.render()}</div>
        </section>

        {/* Code snippet */}
        <section className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <h2 className={styles.sectionTitle}>
              <Code2 size={20} /> Code
            </h2>
            <button
              onClick={() => copyCode(active.code)}
              className={styles.copyBtn}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className={styles.codeBlock}>{active.code}</pre>
        </section>

        {/* Other components navigation */}
        <nav className={styles.navFooter}>
          {activeIndex > 0 && (
            <button
              onClick={() => (window.location.hash = `#${activeIndex - 1}`)}
              className={styles.navBtn}
            >
              ← {showcaseComponents[activeIndex - 1].name}
            </button>
          )}
          {activeIndex < showcaseComponents.length - 1 && (
            <button
              onClick={() => (window.location.hash = `#${activeIndex + 1}`)}
              className={styles.navBtn}
            >
              {showcaseComponents[activeIndex + 1].name} →
            </button>
          )}
        </nav>
      </main>
    </div>
  );
};

export default ShowcasePage;