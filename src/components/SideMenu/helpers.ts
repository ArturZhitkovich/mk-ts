import { Tag as TagType} from '../../types';

export const preparingOptions = (courses: TagType[]) => {
  const allTags: string[] = [];

 courses.forEach(course => {
  allTags.push(...course.tags);
 })

 const uniqueTags = Array.from(new Set(allTags)).map((tag) => ({
  value: tag,
  label: tag,
 }))

 return uniqueTags;
} 