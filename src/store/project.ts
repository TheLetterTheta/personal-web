import Vue from 'vue';
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '.';

export interface Project {
    id: string;
    title: string;
    description: string;
    likes?: number;
}

export interface ProjectState {
    projects: Project[];
}

export const ProjectMutations = {
    AddProject: 'ADD_PROJECT',
    SetProjects: 'SET_PROJECTS',
    LikeProject: 'LIKE_PROJECT',
};

export const getters: GetterTree<ProjectState, RootState> = {
    sortedProjects: state => {
        return state.projects.sort((a: Project, b: Project) => {
            if(a.title < b.title){
                return -1;
            }else if(b.title < a.title){
                return 1;
            }
            return 0;
        });
    }
}

export const mutations: MutationTree<ProjectState> = {
    [ProjectMutations.AddProject](s, payload: Project) {
        s.projects.push(payload);
    },
    [ProjectMutations.SetProjects](s, payload: Project[]) {
        s.projects = payload;
    },
    [ProjectMutations.LikeProject](s, payload: Project) {
        s.projects = [...s.projects.filter((p) => p.id !== payload.id), payload];
    },
};

export const actions: ActionTree<ProjectState, RootState> = {
    loadProjects({commit}) {
        commit(ProjectMutations.SetProjects, [{id: 1, description: 'test desc', title: 'SOME PROJECT'},
                    {id: 2, description: 'Another Description of a project', title: 'ANOTEHR PROEJCT', likes: 20}]);
    },
    likeProject({commit}, payload) {
        let likes = payload.likes || 0;
        payload.likes = ++likes;
        commit(ProjectMutations.LikeProject, payload);
    },
};

export const state: ProjectState = {
    projects: [],
};

export const ProfileModule: Module<ProjectState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
