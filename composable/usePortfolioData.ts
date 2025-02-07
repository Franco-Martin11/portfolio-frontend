import { ref } from 'vue';
import type { LinkRoute, MediaLink, ProjectProps, ExperienceCard } from '@/types/types';
import { LinkRuoteArray, MediaLinkArray, ProjectExampleData, companiesExperience } from '@/constants/data';

export const usePortfolioData = () => {
  const linkRoutes = ref<LinkRoute[]>(LinkRuoteArray);
  const mediaLinks = ref<MediaLink[]>(MediaLinkArray);
  const projectExamples = ref<ProjectProps[]>(ProjectExampleData);
  const experiences = ref<ExperienceCard[]>(companiesExperience);

  return {
    getLinkRoutes: () => linkRoutes.value,
    getMediaLinks: () => mediaLinks.value,
    getProjectExamples: () => projectExamples.value,
    getExperiences: () => experiences.value,
  };
};