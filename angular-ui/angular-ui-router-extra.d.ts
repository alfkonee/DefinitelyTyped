/**  Created by alfkonee on 06-Jan-15. */
declare module ng.ui.extra{
    interface IStickyStateProvider{
        enableDebug(enabled: boolean):any;
        inactiveStates : IState[];
        stickyStates:IState[];
    }
}