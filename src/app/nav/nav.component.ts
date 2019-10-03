import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent {
  navItems: string[] = ["Home", "About", "Gallery", "Contact"];
}
