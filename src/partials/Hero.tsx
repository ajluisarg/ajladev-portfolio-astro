import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola! Soy <GradientText>AjlaDev</GradientText> 👋
        </>
      }
      description={
        <>
          Soy desarrollador Full Stack com amplia experiencia en proyectos de
          diversa índole. En mi vida profesional he sido participe de muchos
          proyectos adoptando roles muy diferentes. Al principio me especialicé
          en tecnologías <GradientText>Backend</GradientText>, pero en la
          actualidad y desde hace unos años me encuentro centrado en tecnologías{' '}
          <GradientText>Frontend</GradientText>
        </>
      }
      avatar={<img src="/public/assets/images/avatar.svg" />}
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/medium-icon.svg"
              alt="Medium icon"
            />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/ig-icon.svg" alt="Instagram icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
