REPLACE THESE TWO FILES BEFORE DEPLOYING
========================================

1. AlbertAddoResume.pdf

   The file currently sitting here is a PLACEHOLDER. Its only content is a
   page that reads "PLACEHOLDER - REPLACE THIS FILE". If you deploy without
   replacing it, anyone clicking the Resume button downloads that page.

   Fix: delete it, copy your real resume in, name it AlbertAddoResume.pdf.
   (Or use any filename you like and update `resumeFile` in
   src/data/profile.ts to match.)

   The Resume button appears in two places: the top navigation bar and the
   Contact section. Both read the same filename from profile.ts.


2. img/albert.jpg   <-- THIS IS NOW THE FIRST THING ANYONE SEES

   Currently a navy tile with your initials. It is the hero image at the top
   of the home page, so replacing it matters more than anything else here.

   Use a portrait photo, at least 840x1050 pixels. It renders at a 4:5 aspect
   ratio with object-cover, which means a square photo will be cropped at the
   top and bottom. Shoot or crop it tall.


Everything else in img/ is a real figure or photograph pulled from your own
reports and portfolio decks. You can delete this file once both replacements
are done.
