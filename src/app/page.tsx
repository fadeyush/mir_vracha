import Description from '@/components/description/Description';
import classes from './page.module.scss'
import FocusSection from '@/components/focusSection/FocusSection';

export default function Home() {
  return (
    <main className={classes.main}>
      <Description/>
      <FocusSection/>
    </main>
  );
}
