import TeamsModel from '../../database/models/teams.model';

const mockFindAll: TeamsModel[] = [new TeamsModel({ id: 1, teamName: 'Ayylmao FC' })];
const mockFindByPk: TeamsModel = new TeamsModel({ id: 5, teamName: 'Test FC' });
const mockGetAll = [
    { id: 1, teamName: 'Avaí/Kindermann' },
    { id: 2, teamName: 'Bahia' },
    { id: 3, teamName: 'Botafogo' },
    { id: 4, teamName: 'Corinthians' },
    { id: 5, teamName: 'Cruzeiro' },
    { id: 6, teamName: 'Ferroviária' },
    { id: 7, teamName: 'Flamengo' },
    { id: 8, teamName: 'Grêmio' },
    { id: 9, teamName: 'Internacional' },
    { id: 10, teamName: 'Minas Brasília' },
    { id: 11, teamName: 'Napoli-SC' },
    { id: 12, teamName: 'Palmeiras' },
    { id: 13, teamName: 'Real Brasília' },
    { id: 14, teamName: 'Santos' },
    { id: 15, teamName: 'São José-SP' },
    { id: 16, teamName: 'São Paulo' }
  ];
  const mockGetById = { id: 13, teamName: 'Real Brasília' };


export { mockFindAll, mockFindByPk, mockGetAll, mockGetById  }