import axios from 'axios';
interface Collaborator {
  name: string;
  numCollaborations: number;
}
interface Repositorio {
  issues: number;
  pulls: number;
  tags: string[];
  forks: number;
  collaborators: Collaborator;
  teams: string[];
  languages: string[];
}
interface User {
  login: string;
  name: string;
  location: string;
  bio: string;
  company: string;
  public_repos: number;
  followers: number;
  following: number;
}
function getUserInfo(): Promise<User> {
  let userInfo: User;
  return axios.get('https://api.github.com/users/CarlosEduardoRodriguesDeSousa').then((e) => {
    userInfo = {
      login: e.data.login,
      name: e.data.name,
      location: e.data.location,
      bio: e.data.bio,
      company: e.data.company,
      public_repos: e.data.public_repos,
      followers: e.data.followers,
      following: e.data.following,
    };
    return userInfo;
  });
}
getUserInfo().then((e) => {
  console.log(e);
});
// axios.get('https://api.github.com/users/CarlosEduardoRodriguesDeSousa/repos').then((e) => {
//   let response: Repositorio[];
//   e.data.forEach((element: any) => {
//     response.push({
//       issues: element.open_issues_count,
//       pulls: element.open_issues_count,
//       tags: element.open_issues_count,
//       forks: element.open_issues_count,
//       collaborators: element.open_issues_count,
//       teams: element.open_issues_count,
//       languages: element.open_issues_count,
//     });
//   });
// });
