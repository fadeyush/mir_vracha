import Description from '@/components/description/Description';
import classes from './page.module.scss'

export default function Home() {
  return (
    <main className={classes.main}>
      <Description/>
    </main>
  );
}
