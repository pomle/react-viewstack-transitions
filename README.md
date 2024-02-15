# React ViewStack Transitions

Provides transitions between views that are mounted with [React Viewstack](https://github.com/pomle/react-viewstack).

The responsibilities for a transition layer is:
* Receive an `active` boolean flag.
* Turn off `pointer-events` when inactive.
* Transition out of the users view when inactive.
* Be "normal" when active.
