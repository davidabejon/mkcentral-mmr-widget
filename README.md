# mkcentral-mmr-widget
This webapp is meant to be used as a Browser Source in an OBS Scene.
It displays the current MMR in MKCentral lounge of a certain player and works for both Mario Kart World (mkworld) and Mario Kart 8 Deluxe (mk8dx).
## How to setup
First, clone the repository and navigate to the root directory
```bash
git clone https://github.com/davidabejon/mkcentral-mmr-widget
cd ./mkcentral-mmr-widget
```
Then, open the config.json file and replace `<YOUR MKCENTRAL USERNAME>` with your own username at MKCentral. If you want to get your Mario Kart 8 Deluxe MMR displayed instead of Mario Kart World MMR, replace `mkworld` with `mk8dx`.
```json
{
  "player": "<YOUR MKCENTRAL USERNAME>",
  "game": "mkworld"
}
```
Open the latest version of OBS and add a Browser Source in the *Sources* tab and give it whatever name you want.
![Browser Source](https://i.imgur.com/7AARiS1.png)
![Create Browser Source](https://i.imgur.com/SZqUwIS.png)
Check the *Local file* option and select the *index.html* file from the repository. Set the **width** property to `92` and the **height** property to `37`.
![enter image description here](https://i.imgur.com/DNFmGgN.png)
Click OK, then resize and move the newly created source to the desired position. Make sure to put it on top of other sources so it can be fully visible.
![OBS Selected Source](https://i.imgur.com/NoezSIe.png)
![OBS Unselected Source](https://i.imgur.com/nVuVGPJ.png)
